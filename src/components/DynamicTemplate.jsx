import { useParams } from "react-router-dom";
const DynamicTemplate = () => {
    const { name } = useParams();
    return(
        <>
            <div className="bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
                <div className="section-container">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{name}</h2>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                            This is a dynamic template page for {name}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DynamicTemplate;