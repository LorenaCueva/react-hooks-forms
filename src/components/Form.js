function Form({firstName, lastName, handleFirstNameChange, handleLastNameChange, handleNewsletterChange, newsletter}) {
 

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange}/>
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
