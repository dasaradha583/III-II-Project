import React from "react";
import "./css/hero.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h2>Why Donate Blood?</h2>
                    <p>
                        Blood donation is a simple, safe, and life-saving act. Every year, millions of people need blood transfusions due to accidents, surgeries, or medical conditions. Unfortunately, blood cannot be manufactured—it can only come from generous donors like you. A single donation can save up to three lives, as blood is separated into red cells, plasma, and platelets for different treatments.
                    </p>
                    <p>
                        Donating blood is quick, easy, and beneficial for both donors and recipients. It takes less than an hour, and your body replenishes the lost blood within weeks. By donating, you not only help those in need but also contribute to a healthier community. Blood donation is a selfless act that brings hope and healing to patients and their families.
                    </p>
                    <p>
                        Join us in this noble cause and make a difference today. Your donation can give someone a second chance at life. Remember, every drop counts!
                    </p>
                    <div className="stats">
                        <h3>Did You Know?</h3>
                        <ul>
                            <li>One donation can save up to 3 lives.</li>
                            <li>Only 37% of the population is eligible to donate blood.</li>
                            <li>Blood is needed every 2 seconds.</li>
                            <li>Regular blood donation reduces the risk of heart disease.</li>
                        </ul>
                    </div>
                </div>
                <button
                    className="cta-button"
                    onClick={() => alert("Thank you for your interest in donating blood!")}
                >
                    Donate Now
                </button>
            </div>
        </section>
    );
};

export default HeroSection;