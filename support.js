
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {threshold: 0.3});

  items.forEach(item => observer.observe(item));
});

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 문의 폼 POST
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 이메일 전송 설정
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Gmail 사용 예시
    auth: {
      user: 'ziny1266@gmail.com', // 본인 Gmail
      pass: 'zinm0513' // Gmail 앱 비밀번호
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'ziny1266@gmail.com', // 실제 문의 받을 이메일
      subject: subject,
      text: `이름: ${name}\n이메일: ${email}\n내용: ${message}`
    });
    res.status(200).send('문의가 성공적으로 전송되었습니다!');
  } catch (err) {
    res.status(500).send('문의 전송에 실패했습니다.');
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
