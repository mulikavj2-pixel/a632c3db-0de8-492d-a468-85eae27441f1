"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import TagAboutCard from '@/components/sections/about/TagAboutCard';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Zap, Target, Lightbulb, Rocket, BarChart3, TrendingUp, Users, Globe, Star, Network, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="smallSizeLargeTitles"
      background="aurora"
      cardStyle="elevated-accent-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Fresh Fund"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          tag="Israeli Tech Leadership"
          tagIcon={Zap}
          title="Fueling Israel's Next Generation of Tech Innovation"
          description="Fresh Fund invests in breakthrough startups transforming industries. We combine strategic capital, operational expertise, and global networks to accelerate growth from Tel Aviv to the world."
          buttons={[
            {
              text: "Explore Investments",
              href: "portfolio"
            },
            {
              text: "Investor Relations",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804389863-4cf3kaqk.jpg"
          imageAlt="Israeli tech startup innovation team"
          frameStyle="browser"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAboutCard
          tag="About Fresh Fund"
          tagIcon={Target}
          title="Investing in the Israeli Tech Ecosystem"
          paragraphs={[
            "Fresh Fund is a venture capital fund based in Tel Aviv, dedicated to identifying and nurturing the next generation of Israeli technology leaders. We invest in early to growth-stage startups across fintech, AI, cybersecurity, and enterprise software.",
            "Our team combines deep industry experience, technical expertise, and an extensive network across Silicon Valley, Europe, and Israel. We don't just provide capital—we provide strategic guidance, operational support, and connections that accelerate success.",
            "We believe Israeli innovation has the potential to solve global challenges. Our mission is to provide the capital, mentorship, and resources that transform bold ideas into market-defining companies."
          ]}
          icon={Lightbulb}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Featured Portfolio Companies"
          description="Meet the innovative startups we're backing. Each company is redefining their industry with fresh perspectives and cutting-edge technology."
          tag="Our Investments"
          tagIcon={Rocket}
          products={[
            {
              id: "1",
              name: "DataVault AI",
              price: "$12M Raised",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804402671-wf5rycjv.jpg",
              imageAlt: "DataVault AI fintech platform"
            },
            {
              id: "2",
              name: "SecureNet Labs",
              price: "$8M Raised",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804404782-keln5538.jpg",
              imageAlt: "SecureNet Labs cybersecurity solution"
            },
            {
              id: "3",
              name: "CloudFlow Systems",
              price: "$15M Raised",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804406023-8tcgxj5f.jpg",
              imageAlt: "CloudFlow Systems infrastructure platform"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Fund Performance & Impact"
          description="Measurable results that demonstrate our commitment to driving innovation and growth in the Israeli tech ecosystem."
          tag="Metrics"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Portfolio Growth",
              value: "3.2x"
            },
            {
              id: "2",
              icon: Users,
              title: "Startups Backed",
              value: "24"
            },
            {
              id: "3",
              icon: Zap,
              title: "Unicorns",
              value: "3"
            },
            {
              id: "4",
              icon: Globe,
              title: "Market Reach",
              value: "45"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="team" data-section="team">
        <TeamCardTen
          title="Leadership Team"
          tag="Meet Our Team"
          members={[
            {
              id: "1",
              name: "David Cohen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804392110-jt5c6bod.jpg",
              imageAlt: "David Cohen, Managing Partner"
            },
            {
              id: "2",
              name: "Sarah Levi",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804393304-2i0d2n58.jpg",
              imageAlt: "Sarah Levi, Investment Director"
            }
          ]}
          memberVariant="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Yoni Sharon",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804396097-jszekwda.jpg",
              imageAlt: "Yoni Sharon"
            },
            {
              id: "2",
              name: "Noa Mizrahi",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804397880-nhgtozxi.jpg",
              imageAlt: "Noa Mizrahi"
            },
            {
              id: "3",
              name: "Eitan Broido",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804399676-8robg5hi.jpg",
              imageAlt: "Eitan Broido"
            },
            {
              id: "4",
              name: "Rina Gal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804401002-oykwb8bo.jpg",
              imageAlt: "Rina Gal"
            }
          ]}
          cardTitle="Portfolio Company Leaders & Founders"
          cardTag="Success Stories"
          cardTagIcon={Star}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Portfolio Companies & Partners"
          description="Building the future with leading Israeli and international tech companies"
          tag="Ecosystem"
          tagIcon={Network}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804407294-co73few6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804408781-dq4uw82i.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804410033-mcssxf9r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804411585-nefxw489.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804412801-9frijfe6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804414068-d3or81dp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804415683-8zkglfs5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765804416975-uitwje5f.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about investing with Fresh Fund"
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What is Fresh Fund's investment range?",
              content: "We typically invest between $500K and $5M in early to growth-stage startups. We're flexible with the right opportunity and can participate in larger rounds."
            },
            {
              id: "2",
              title: "What sectors do you focus on?",
              content: "We specialize in fintech, AI, cybersecurity, enterprise software, and climate-tech. We're always interested in innovative companies solving real global problems."
            },
            {
              id: "3",
              title: "Do you take board seats?",
              content: "Yes, we typically take a board seat or observer seat depending on the round size and our investment level. Active participation and strategic guidance are core to our value proposition."
            },
            {
              id: "4",
              title: "How long is your typical holding period?",
              content: "We're patient capital with a typical 5-7 year horizon. We support our companies through multiple funding rounds and exit events."
            },
            {
              id: "5",
              title: "Do you provide mentorship beyond capital?",
              content: "Absolutely. Our team brings decades of experience and a global network. We actively mentor founders on product development, go-to-market strategy, fundraising, and scaling operations."
            },
            {
              id: "6",
              title: "How do I apply for funding?",
              content: "Submit your pitch deck and executive summary through our website or refer a portfolio company you know. We review all submissions and respond within 2 weeks."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Join Our Community"
          description="Subscribe to our newsletter for updates on portfolio companies, market insights, and fresh investment opportunities in the Israeli tech ecosystem."
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Our Portfolio",
                  href: "portfolio"
                },
                {
                  label: "Fund Performance",
                  href: "metrics"
                },
                {
                  label: "How We Invest",
                  href: "about"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Fresh Fund",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Disclosures",
                  href: "#"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Fresh Fund | Tel Aviv, Israel"
        />
      </div>
    </ThemeProvider>
  );
}
