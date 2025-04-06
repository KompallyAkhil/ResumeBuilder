import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
const Templates = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer)
    }, []);
    const navigate = useNavigate();
    const templates = [
        {
            id: 1,
            name: "Executive",
            category: "Professional",
            image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
            popular: true
        },
        {
            id: 2,
            name: "Minimalist",
            category: "Simple",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            popular: false
        },
        {
            id: 3,
            name: "Creative Plus",
            category: "Creative",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
            popular: true
        },
        {
            id: 4,
            name: "Modern Tech",
            category: "Modern",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            popular: false
        },
    ];
    return (
        <>
            <section className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
                <div className="section-container">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Templates</h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            Choose from our collection of professionally designed templates to make your resume stand out
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {(isLoading ? Array(4).fill(null) : templates).map((template, index) => (
                        <div key={template?.id || index} className="group">
                            <div className="template-card group">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                                    {isLoading ? (
                                        <Skeleton className="w-full h-full rounded-md" />
                                    ) : (
                                        <>
                                            <img
                                                src={template.image}
                                                alt={template.name}
                                                className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                                <div className=" flex gap-4 p-4 w-full">
                                                    <Dialog>
                                                        <DialogTrigger asChild>
                                                           <Button className="w-full premium-button">View Template</Button>                                                
                                                        </DialogTrigger>
                                                        <DialogContent className="w-full h-full">
                                                            <img src={template.image} className="object-cover object-center w-full h-full "/>
                                                        </DialogContent>
                                                    </Dialog>
                                                    <Button onClick={()=> navigate(`/template/${template.name}`)} className="w-full premium-button">Use Template</Button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>

        </>
    )
}
export default Templates;