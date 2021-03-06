import Layout from "../../../components/Layout";
import CourseCard from "../../../components/CourseCard";
import { InferGetStaticPropsType } from "next";

type LearningData = {
  bookName: string;
  courseFor: string;
  learning: Array<{
    id: string;
    name: string;
  }>;
};

const English = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="English">
      <section>
        <h1 className="text-2xl mb-5 p-3  tracking-widest text-center text-pink-500 ">
          English
        </h1>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
          {data.map(({ bookName, courseFor, learning }) =>
            learning.map((d) => (
              <CourseCard
                key={d.id}
                name={d.name}
                bookName={bookName}
                courseFor={courseFor}
              />
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};
export default English;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/c01f749615b0d58f44d87ba453252705/raw/cc949eb548cfc068ec75d8992dd3f58e1b88c148/Class-I_English"
  );

  const data: LearningData[] = await response.json();
  return {
    props: {
      data,
    },
  };
};
