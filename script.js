


let screen = document.getElementById("screen");
let output = document.querySelector("#output");
let loader = document.querySelector("#loader");


let input;
screen.addEventListener("input", () => {
    input = screen.value;
    
})

const userInput1 = `Suggest some songs for following mood mood:${input}`;




function getData(){
    
    loader.style.display='block';
(async () => {
  const url = "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const userInput = {
    prompt: userInput1,
    max_tokens: 256,
    temperature: 0.7,
    frequency_penalty: 0.5,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  };

//   console.log("calilin ")
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: headers,
    });
    const data = await response.json();

    console.log(data.choices[0]); 
    loader.style.display='none';
    output.innerHTML=data.choices[0].text;
    
    // output = `${prompt}${response.choices[0].text}`; // console.log(output);
  } catch (err) {
    console.log(err);
  }
})();
}