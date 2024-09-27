import { useState, useEffect, useRef } from "react";
import Question from "../types/Question";
import QuestionFetched from "../types/QuestionFetched";
import mapFetchedToQuestions from "../utils/mapFetchedToQuestions";

type DataFetched = {
  results: QuestionFetched[];
};

const useFetchQuestions = (url: string) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("https://opentdb.com/api.php?amount=5", {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const { results }: DataFetched = await res.json();
        setQuestions(mapFetchedToQuestions(results));
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== "AbortError") {
            setError(err);
          }
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        if (abortControllerRef.current === controller) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);
  return { questions, loading, error };
};

export default useFetchQuestions;
