import "./Form.css";

function Form() {
  return (
    <>
      <div className="form-card">
        <h1>Volleyball Tournament Application</h1>
        <form action="">
          {/* First Name */}
          <div>
            <label htmlFor="fname">First Name:* </label>
            <input type="text" id="fname" name="fname" />
          </div>
          {/* Last Name */}
          <div>
            <label htmlFor="lname">Last Name:* </label>
            <input type="text" id="lname" name="lname" />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email">Email:* </label>
            <input type="email" id="email" name="email" />
          </div>
          {/* Phone Number */}
          <div className="phone-container">
            <label htmlFor="phone">Phone:* </label>
            {/* Phone Type */}
            <div>
              <select name="phone" id="phoneType">
                <option value="mobile">Mobile</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
              </select>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>
          {/* Gender */}
          <div class="radio-gender">
            <p>Gender:* </p>
            <div>
              <div>
                <input type="radio" id="male" name="gender" />
                <label htmlFor="male">Male </label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" />
                <label htmlFor="female">Female </label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" />
                <label htmlFor="other">Other </label>
              </div>
            </div>
          </div>

          {/* Volleyball Position */}
          <div class="checkbox-position">
            <p>Positions:* </p>
            <div>
              <div>
                <input type="checkbox" name="position" id="outside" />
                <label htmlFor="outside">Outside</label>
              </div>
              <div>
                <input type="checkbox" name="position" id="setter" />
                <label htmlFor="setter">Setter</label>
              </div>
              <div>
                <input type="checkbox" name="position" id="opposite" />
                <label htmlFor="opposite">Opposite</label>
              </div>
              <div>
                <input type="checkbox" name="position" id="middle" />
                <label htmlFor="middle">Middle</label>
              </div>
              <div>
                <input type="checkbox" name="position" id="libero" />
                <label htmlFor="libero">Libero</label>
              </div>
            </div>
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
              placeholder="Enter any questions or comments"
            ></textarea>
          </div>
          {/* Buttons */}
          <div className="button-container">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
