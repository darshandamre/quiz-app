import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

const getQuizzes = async () => {
  const { data, error } = await supabase.from("quiz").select("*");

  if (error) throw error;

  return data;
};

const useQuizzes = () => useQuery("quizzes", getQuizzes);

export { useQuizzes };
