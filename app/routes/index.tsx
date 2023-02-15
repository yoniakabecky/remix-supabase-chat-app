import { useLoaderData } from "@remix-run/react";
import supabaseServer from "utils/supabase.server";
import Login from "components/login";

export const loader = async () => {
  const { data } = await supabaseServer.from("messages").select();
  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  return (
    <>
      <Login />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </>
  );
}
