import { Post } from "../page/Home";

export const fetchPosts = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAllPosts: React.Dispatch<React.SetStateAction<Post[] | null>>
) => {
  setLoading(true);

  try {
    const response = await fetch("http://localhost:8080/api/v1/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      setAllPosts(result.data.reverse());
    }
  } catch (err) {
    alert(err);
  } finally {
    setLoading(false);
  }
};
