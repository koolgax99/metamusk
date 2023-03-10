const buttonText = 'What\'s going on?'

function getAIOutput() {
  const host = 'https://metamusk-02ii.onrender.com'
  const txHash= document.getElementById("txHashInput").value
  const chainId = document.getElementById("chainId").value
  const submitButton = document.getElementById("submitButton")

  console.log(txHash)
  console.log(chainId)

  submitButton.innerText = 'loading...'
  submitButton.disabled = true
  axios.get(`${host}/chainId/${chainId}/txHash/${txHash}`, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })
  .then(data => {
    const AItextOutput = data.data
    console.log(AItextOutput)
    const outputDiv = document.getElementById("AIoutput")
    submitButton.disabled = false
    submitButton.innerText = buttonText
    outputDiv.innerText = AItextOutput
  }).catch(e => {
    alert(e.message + '\n\nPlease be sure you\'ve filled all the fields and have correct evm addresses')
    submitButton.disabled = false
    submitButton.innerText = buttonText
  });
}