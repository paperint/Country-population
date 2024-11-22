"use server";

export const request = async (options: any) => {
  const res = await fetch(options.uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options.data),
  });

  if (!res.ok) {
    throw new Error("Error fetch");
  }

  const data = res.json();

  return data;
};
