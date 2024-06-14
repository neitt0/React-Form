import "./Form.css";

function Form() {
  return (
    <>
      <h1>Volleyball Tournament Application</h1>
      <form action="">
        {/* First Name */}
        <div>
          <label htmlFor="fname">First Name: </label>
          <input type="text" id="fname" name="fname" />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lname">Last Name: </label>
          <input type="text" id="lname" name="lname" />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone">Phone: </label>
          {/* Phone Type */}
          <select name="phone" id="phoneType">
            <option value="mobile">Mobile</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>
          <input type="tel" id="phone" name="phone" />
        </div>

        {/* Gender */}
        <div>
          <p>Gender: </p>
          <input type="radio" id="male" name="gender" />
          <label htmlFor="male">Male </label>
          <input type="radio" id="female" name="gender" />
          <label htmlFor="female">Female </label>
          <input type="radio" id="other" name="gender" />
          <label htmlFor="other">Other </label>
        </div>

        {/* Volleyball Position */}
        <div>
          <p>Prefered Positions: </p>

          <input type="checkbox" name="position" id="outside" />
          <label htmlFor="outside">Outside</label>

          <input type="checkbox" name="position" id="setter" />
          <label htmlFor="setter">Setter</label>

          <input type="checkbox" name="position" id="opposite" />
          <label htmlFor="opposite">Opposite</label>

          <input type="checkbox" name="position" id="middle" />
          <label htmlFor="middle">Middle</label>

          <input type="checkbox" name="position" id="libero" />
          <label htmlFor="libero">Libero</label>
        </div>

        {/* Mandatory Pet Picture */}
        <div>
          <label htmlFor="pet">Picture of Pet(s): </label>
          <input type="file" name="pet" id="pet" />
        </div>

        {/* Extra Comments */}
        <div>
          <label htmlFor="comment">Comment: </label>
          <textarea
            name="pet"
            id="pet"
            placeholder="Exter any questions or comments"
          ></textarea>
        </div>

        {/* Buttons */}
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
