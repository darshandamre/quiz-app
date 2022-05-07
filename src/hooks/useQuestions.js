import { useQuery } from "react-query";
import { supabase } from "../supabaseClient";

const getQuestions = async quizId => {
  let { data, error } = await supabase
    .from("questions")
    .select(
      `*, 
      options (
        id,
        content,
        correct
      )
    `
    )
    .eq("quizId", quizId);

  if (error) throw error;

  return data;
};

const useQuestions = quizId =>
  useQuery(["questions", quizId], () => getQuestions(quizId));

export { useQuestions };
