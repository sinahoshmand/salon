import BlogCard from "./BlogCard";
import SectionTitle from "./ui/SectionTitle";

export default function Article() {
  return (
    <section className="mt-13 container-c pb-20">
      <SectionTitle
        title="Beauty Tips & Last Trends"
        link_name="View All Articles"
      />
      <div className="grid grid-cols-3 gap-7 mt-6 ">
           <BlogCard image="/images/blog.jpg"/>
           <BlogCard  image="/images/blog2.jpg"/>
           <BlogCard  image="/images/blog.jpg"/>
      </div>
    </section>
  );
}
