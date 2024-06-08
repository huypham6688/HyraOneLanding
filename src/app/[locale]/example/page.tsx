const Example = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const result = await response.json();

  return (
    <div className="container mx-auto">
      <p className="text-center text-4xl font-semibold mb-4">Pokemon list</p>
      <div className="min-h-[50vh] flex items-center justify-center text-[32px]">
        <table>
          <tbody>
            <tr>
              <th>Pokemon name</th>
              <th>Link</th>
            </tr>
            {result?.results?.length > 0 &&
              result.results.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <a href={item.url} className="hover:underline">
                      {item.url}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Example;
