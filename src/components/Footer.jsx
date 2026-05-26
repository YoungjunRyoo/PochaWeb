import "../css/Footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="location">
                <h2>Location</h2>
                {/* ⚡ navbar-link를 지우고 footer-link로 변경 */}
                <a 
                    href="https://www.google.com/maps/place/Pocha+is+Back/@30.335885,-97.7230802,17z/data=!4m16!1m9!3m8!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!2sPocha+is+Back!8m2!3d30.3358804!4d-97.7205053!9m1!1b1!16s%2Fg%2F11s8_v4x4g!3m5!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!8m2!3d30.3358804!4d-97.7205053!16s%2Fg%2F11s8_v4x4g?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
                    className="footer-link footer-address"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    6808 N Lamar Blvd #B-110, Austin, TX 78752
                </a>
            </div>
            
            <div className="contact-info">
                <h2>Contact Info</h2>
                {/* ⚡ 전화번호 링크도 푸터 스타일을 따르도록 클래스 추가 */}
                <p>
                    <a href="tel:+15123230153" className="footer-link phone-link">
                        (512) 323-0153
                    </a>
                </p>

                {/* ⚡ 인스타그램 및 기타 아이콘 링크 전용 클래스로 변경 */}
                <a 
                    href="https://www.instagram.com/pochaisback_atx/?hl=en" 
                    className="footer-insta-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="footer-insta-icon" src="images/icon1.png" alt="Instagram" />
                </a>
                <a 
                    href="https://www.google.com/maps/place/Pocha+is+Back/@30.3358804,-97.7205053,17z/data=!3m1!4b1!4m6!3m5!1s0x8644cb680b7b5063:0xba4e09a1744ba7d1!8m2!3d30.3358804!4d-97.7205053!16s%2Fg%2F11s8_v4x4g?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" 
                    className="footer-insta-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="footer-insta-icon" src="images/icon2.png" alt="Instagram" />
                </a>
            </div>
            
            <div className="business-hour">
                <h2>Business Hour</h2>
                <p>Mon-Sat{'\u00A0\u00A0'}5PM - 2AM</p>
                <p>Sun{'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}Closed</p>
            </div>
        </div>
    );
}

export default Footer;