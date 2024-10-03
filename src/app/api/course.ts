// src/lib/api/course.ts
export async function getCoursesByUserId(userId: number) {
  const token = localStorage.getItem("token"); // Ambil token dari local storage
  console.log(token);

  if (!token) {
    console.error("Token is not available");
    return null;
  }

  try {
    const response = await fetch(`https://be-swap-academy.nioke-studio.my.id/api/course/${userId}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `bearer ${token}`, // Sertakan token dalam Authorization header
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return null;
  }
}
