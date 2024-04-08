 const phrases = [
         "Đạt Siêu Cấp.",
            "Công Gay Bê Đê Siêu Cấp Vip Pro Lever Max.",
            "Hoàng Gay Yêu Cong Gay.",
            "Nhật Thích Ăn 3 Tô Cơm.",
            "Lười Ghi Quá.",
            "Sắp Thi Rồi Sao.",
            "Trung Ngu.",
            "Hoàng Vâu Óc Chóa.",
            "Phú Dammy [DJ Dammy].",
            "Đến Đây Chỉ Muốn Nói Rằng Đạt Đẹp Zai Khoai To 300 KM.",
            "HỞ.",
            "Đọc Làm Con Đạt.",
            "Học Đi Mấy Con Lười.",
            "Đừng Để Vào Công Ty Nam Thoát Y Của Hoàng."
    ];

    function getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randomIndex];
    }

    function displayRandomText() {
        const randomTextElement = document.getElementById("randomText");
        randomTextElement.textContent = getRandomPhrase();
    }

    // Update the text every 3 seconds
    setInterval(displayRandomText, 60000);