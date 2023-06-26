# Example of QR based attendance for Maxima 2023

Buat debugnya, karena di web browser sekarang ngelarang untuk akses camera kalo nggak https, kita disini ada 2 pilihan :

### 1. Ganti flags unsafely-treat-insecure-origin-as-secure

nyalain flags ini `chrome://flags/#unsafely-treat-insecure-origin-as-secure` di chrome based browser.

### 2. Pake ngrok, buka link https nya :)

`ngrok http 3000`

Note : abaikan ini kalo production, kan kita udah pasti https.
