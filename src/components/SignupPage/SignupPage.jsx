import { useState } from "react"
function SignupPage() {
  const [person, setPerson] = useState({
    password: '',
    nationality: 'german',
    email: '',
    message: '', // I could store the message in nationality, but that's not future proof
    valid: '',
    passValid: ''
  });
  let [loaded, setLoaded] = useState(false);
  const [returnee, setReturnee] = useState({
    ...person
  });
  /*"Moi", "Hello", "Hallo" or "Bonjour"*/
  const national = (e) => {
    let r;
    switch (e.target.value) {
      case "german":
        r = "Hallo"
        break;
      case "french":
        r = "Bonjour"
        break;
      case "finnish":
        r = "Moi"
        break;
      case "english":
        r = "Hello"
        break;
    }
    setPerson({ ...person, message: r, nationality: e.target.value })
  }
  const validate = (e) => {
    const email = e.target.value;
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const valid = regex.test(email) ? "Email is valid!" : "Email is invalid!"
    setPerson({ ...person, email: email, valid: valid })
  }
  const passwordLen = (e) => {
    const pass = e.target.value;
    const valid = pass.length <= 3 ? "Your password is too weak" : "Your password is good enough"

    setPerson({ ...person, password: pass, passValid: valid })
  }
  const submit = (person) => {
    if (person.valid === "Email is invalid!") { console.log("invalid email"); return }
    setReturnee({ ...person })
    setLoaded(true)
  }
  const Load = () => {
    if (!loaded) { return (<br />) }
    return (<p>
      {returnee.message} <br />
      Your email is: {returnee.email}<br />
    </p>)
  }
  return (
    <div>
      <form onSubmit={() => submit(person)}>
        <label> {/*Trying out React documentation's way of using labels*/}
          Email:
          <br />
          <input
            value={person.email}
            onChange={(e) => { validate(e) }}
          />
          <br />
          <p>{person.valid}</p>
          <br />
        </label>
        <label>
          Password:
          <br />
          <input
            value={person.password}
            onChange={(e) => { passwordLen(e) }}
          />
          <br />
          <p>{person.passValid}</p>
          <br />
        </label>
        <label>
          Nationality:
          <br />
          <select
            value={person.nationality}
            onChange={(e) => { national(e) }}
          >
            <option value="german">German</option>
            <option value="french">French</option>
            <option value="finnish">Finnish</option>
            <option value="english">English</option>
          </select>
        </label>
        <h3>
          <button type="submit">Submit</button>
        </h3>
      </form>
      <Load />
    </div>
  )
}

export default SignupPage
