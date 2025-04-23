const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "your-fallback-encryption-key";

export const encryptToken = (token: string): string => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: number) => ("0" + Number(n).toString(16)).substr(-2);
  // Sửa hàm applySaltToChar để xử lý mảng số đúng cách
  const applySaltToChar = (chars: number[]) =>
    chars.map((code) =>
      textToChars(ENCRYPTION_KEY).reduce((a, b) => a ^ b, code)
    );

  return token
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .flat() // Làm phẳng mảng kết quả
    .map(byteHex)
    .join("");
};

export const decryptToken = (encoded: string): string => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code: number) =>
    textToChars(ENCRYPTION_KEY).reduce((a, b) => a ^ b, code);

  return encoded
    .match(/.{1,2}/g)!
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

export const encryptObject = (obj: any): string => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const byteHex = (n: number) => ("0" + Number(n).toString(16)).substr(-2);
  // Sửa hàm applySaltToChar để xử lý mảng số đúng cách
  const applySaltToChar = (chars: number[]) =>
    chars.map((code) =>
      textToChars(`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).reduce(
        (a, b) => a ^ b,
        code
      )
    );

  return JSON.stringify(obj)
    .split("")
    .map(textToChars)
    .map(applySaltToChar)
    .flat() // Làm phẳng mảng kết quả
    .map(byteHex)
    .join("");
};

export const decryptObject = (encoded: string) => {
  const textToChars = (text: string) =>
    text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code: number) =>
    textToChars(`${process.env.NEXT_PUBLIC_ENCRYPTION_KEY}`).reduce(
      (a, b) => a ^ b,
      code
    );

  return JSON.parse(
    encoded
      .match(/.{1,2}/g)!
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("")
  );
};
