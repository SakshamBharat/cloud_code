# Cloudinary Upload API

A small Express service for uploading files to Cloudinary with Multer.

## Requirements

- Node.js 18 or newer
- A Cloudinary account and API credentials

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. Start the server:

   ```bash
   node index.js
   ```

The server listens on `http://localhost:3000`.

## Endpoints

### `GET /api/`

Returns a simple browser upload form.

### `POST /api/upload`

Uploads one file to Cloudinary.

Send the request as `multipart/form-data` using the field name `myFile`:

```bash
curl -X POST http://localhost:3000/api/upload \
  -F "myFile=@./path/to/file.jpg"
```

Uploads are stored in the Cloudinary `my-uploads` folder. Files are limited to 10 MB.

Successful response:

```json
{
  "message": "File uploaded successfully",
  "url": "https://res.cloudinary.com/...",
  "public_id": "my-uploads/..."
}
```

Requests without a file return `400`. Upload failures return `500`.
