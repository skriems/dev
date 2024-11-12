export const addOwnMessage = `
<script type="text/javascript">
  const form = document.getElementById("form");
  const input = document.querySelector("input[name=message]");
  const chat = document.getElementById("chat");
  const ws = document.querySelector("[hx-ext=ws]");

  form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e);

    const wrapper = document.createElement("div");
    wrapper.classList.add("chat");
    wrapper.classList.add("chat-end");
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");
    bubble.innerText = input.value;
    wrapper.appendChild(bubble);

    chat.appendChild(wrapper);
  });
</script>
`;
