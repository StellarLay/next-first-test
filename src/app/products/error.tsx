"use client";

const Error = ({ error }: { error: Error }) => {
  return <h1>Упс... {error.message}</h1>;
};

export default Error;
