import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";

export const loader = async () => {
  const { data } = await supabase.from("messages").select();
  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();
  return <pre>{JSON.stringify(messages, null, 2)}</pre>;
}
