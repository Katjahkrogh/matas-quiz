import React from "react";

export default async function page() {
  // GET svarmuligheder fra Supabase
  const res = await fetch(
    "https://largmqclsxkjplwlmtju.supabase.co/rest/v1/matas",
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcmdtcWNsc3hranBsd2xtdGp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTUxMTYsImV4cCI6MTk5NzI5MTExNn0.nJMcytnEAVfVxQa6ZbZ4OGAF076k-1FVgNDmH32XjVs",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <div>page</div>
    </main>
  );
}