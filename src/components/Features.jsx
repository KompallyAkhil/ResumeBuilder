
import { Check, Edit, Clock, Award, Layout, Star } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Edit className="h-6 w-6 text-primary" />,
      title: "Easy to Use Editor",
      description: "Intuitive drag-and-drop interface that makes creating and updating your resume effortless."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Save Time",
      description: "Create a professional resume in minutes, not hours. Our templates are designed for efficiency."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "ATS-Optimized",
      description: "All templates are designed to pass Applicant Tracking Systems and reach human recruiters."
    },
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Multiple Formats",
      description: "Export your resume in multiple formats including PDF, DOCX, and TXT to suit any application needs."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Expert-Designed",
      description: "Templates crafted by recruitment experts and designers for maximum impact and readability."
    },
    {
      icon: <Check className="h-6 w-6 text-primary" />,
      title: "Real-Time Preview",
      description: "See changes instantly as you edit, ensuring your resume looks perfect before you download."
    }
  ];

  return (
    <div>

    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent -z-10" />
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crafted for Success</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to create impressive resumes that help you land interviews
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
              <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
              >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
          </div>
  );
};

export default Features;
