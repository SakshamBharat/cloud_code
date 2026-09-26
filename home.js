export async function home(req, res) {
  res.send(`
    <form action="/api/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="myFile" />
      <button type="submit">Upload</button>
    </form>
  `);
}
