import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      const req = await fetch(url);
      const data = await req.json();
      setIsPending(false);
      setData(data);
    };
    getData();
  }, [url]);
  return { data, isPending };
}
