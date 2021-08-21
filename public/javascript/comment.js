async function commentFormHandler(event) {
  event.preventDefault();

  // comment_text is equivalent to the text area value
  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  // retrieve of id of post that the comment is being left on
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // check that comment_text has a value, if it does... send the comment to the database
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(comment_text, post_id);
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .getElementById("submitComment")
  .addEventListener("click", commentFormHandler);
