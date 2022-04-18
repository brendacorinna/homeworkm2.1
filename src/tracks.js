const Tracks = () => {
    return (
        <>
            <h1>Create Playlist</h1>
            <form>
                <label >First name: </label>
                <input type="text" id="fname" name="fname" /><br /><br />
                <label>Last name: </label>
                <input type="text" id="lname" name="lname" /><br /><br />
                <button type="submit" value="Submit" onclick="myFunction()">
                    Submit
                </button>
            </form>

            <p>Click on the submit button to submit the form.</p>
            <div class="contains-item">
                <img
                    src="https://upload.wikimedia.org/wikipedia/id/9/96/Adele_-_25_%28Official_Album_Cover%29.png"
                />
                <h1>When We Were Young</h1>
                <h2>Adele</h2>
                <h3>25</h3>
                <button>Button that does nothing</button>
            </div>
        </>
    )
}

export default Tracks;