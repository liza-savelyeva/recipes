export default function About() {
    return (
        <div className="p-4">
            <h1 className="text-3xl text-center font-bold mb-5">About</h1>
            <div className="flex flex-row gap-7 items-center mx-20">
                <div>
                    <p className="text-xl mb-10">This is a media platform about life with taste and meaning, which was launched in 2021.
                    We follow trends and create them with you. It's not just about food: we're talking about 
                    healthy lifestyle and self-development, hobbies and travel, design and renovation, fashion
                    and beauty. About everything that makes life easier and an ordinary day brighter.
                    </p>
                    <p className="text-xl">It's also a space for anyone who knows how to cook or wants to learn. 
                        It is enough to send
                    a recipe to become a part of the culinary community, or to share your opinion in the comments. 
                    Whatever you cook, we want to cook with you.
                    </p>
                </div>
               
                <img src="cook.webp" alt="cook" className="w-2xl" /> 
            </div>
            
        </div>
    )
}