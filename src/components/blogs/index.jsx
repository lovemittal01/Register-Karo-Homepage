import React from "react";
import image1 from "../../assets/blogs/Image.svg";
import image2 from "../../assets/blogs/Image (1).svg";
import image3 from "../../assets/blogs/Image (2).svg";
import image4 from "../../assets/blogs/Image (3).svg";
import image5 from "../../assets/blogs/Image (4).svg";
import image6 from "../../assets/blogs/Image (5).svg";
import arrow1 from "../../assets/blogs/Icon.svg";
import arrow2 from "../../assets/blogs/Icon (1).svg";

const Card = ({ image, author, date, title, description, tags }) => {
  return (
    <div className="h-[410px] md:h-[444px] w-full sm:w-[384px] flex flex-col justify-between items-start">
      <div>
        <img src={image} className="w-full" alt="Blog" />
      </div>
      <div className="h-[172px] flex flex-col justify-between">
        <div className="text-[#667085] text-[14px] font-semibold">
          {author} • {date}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#1a1a1a] text-[22px] font-bold">{title}</div>
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <img src={arrow1} className="w-[10px] h-[10px]" alt="Arrow" />
          </div>
        </div>
        <div className="text-[#667085] text-[15px] font-normal">
          {description}
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`w-fit px-[12px] py-[4px] rounded-full text-[14px] font-medium ${tag.style}`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  const cardData = [
    {
      image: image1,
      author: "Prabhash Mishra",
      date: "1 Jan 2023 • Today",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: [
        { label: "Tax & Audit", style: "text-[#6941c6] bg-[#f9f5ff]" },
        { label: "Management", style: "text-[#363f72] bg-[#f8f8fc]" },
      ],
    },
    {
      image: image2,
      author: "Mahesh Kumar",
      date: "12 Dec 2022",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        { label: "Tax", style: "text-[#007f5f] bg-[#e6fff3]" },
        { label: "Research", style: "text-[#004e89] bg-[#e6f2ff]" },
        { label: "Compliance", style: "text-[#c4320a] bg-[#fff6ed]" },
      ],
    },
    {
      image: image3,
      author: "Rakhi Verma",
      date: "8 Dec 2022",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: [
        { label: "Audit", style: "text-[#d97706] bg-[#fff4e5]" },
        { label: "Money Back", style: "text-[#344055] bg-[#eaeff3]" },
      ],
    },
    {
      image: image4,
      author: "Karan Kumar",
      date: "5 Nov 2022",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: [
        { label: "Money", style: "text-[#b81c56] bg-[#ffeaf0]" },
        { label: "Management", style: "text-[#1a73e8] bg-[#eaf3ff]" },
      ],
    },
    {
      image: image5,
      author: "Richa Singh",
      date: "28 Oct 2022",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: [
        { label: "Tax Return", style: "text-[#10b981] bg-[#f0fdf4]" },
        { label: "News", style: "text-[#4b5563] bg-[#f9fafb]" },
        { label: "Audit", style: "text-[#b81c56] bg-[#ffeaf0]" },
      ],
    },
    {
      image: image6,
      author: "Miss Nora",
      date: "15 Sep 2022",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: [
        {
          label: "Private Limited Company",
          style: "text-[#256d1b] bg-[#eaffea]",
        },
        { label: "Customer Success", style: "text-[#1e3a8a] bg-[#e0e7ff]" },
      ],
    },
  ];

  return (
    <>
      <div
        className="h-auto py-8 md:py-16 bg-white flex flex-col gap-12 items-center justify-center px-4 sm:px-8 lg:px-16"
        style={{ fontFamily: '"Inter", serif' }}
      >
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <div className="text-[#eb8d15] text-[14px] font-normal">
            EXPLORE OUR BLOGS
          </div>
          <div className="text-[#3c2109] text-[32px] font-bold">
            Accelerate Digital Transformation
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className="bg-[#1c4670] w-fit rounded-md gap-2 px-[20px] py-[12px] flex items-center justify-center border border-[#e5e5e7]">
          <div className="font-semibold text-[15px] text-white">
            Show more blogs
          </div>
          <img src={arrow2} className="h-[10px]" alt="Arrow" />
        </div>
      </div>
    </>
  );
};

export default Blogs;
