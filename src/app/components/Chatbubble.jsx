const Chatbubble = ({ role, text }) => {
    if (role === 'model') {
        return (
            <div className="flex">
           <img src="/hitesh.png" alt="Hitesh Sir" className="w-10 h-10 mr-2 rounded-full" />
            <div className="flex flex-col items-start mb-2 bg-white-400 bg-white rounded-md p-4">
                <strong className="text-blue-600">Hitesh Sir:</strong>
                <p className="whitespace-pre-wrap !text-black">{text}</p>
            </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-end">
            <div className="flex flex-col items-end mb-2  bg-white rounded-md p-4 ">
                <strong className="text-blue-600">Me:</strong>
                <p className="whitespace-pre-wrap !text-black">{text}</p>
            </div>
            <img src="/user.png" alt="Hitesh Sir" className="w-10 h-10 mr-2 rounded-full" />
            </div>
        );
    }
};

export default Chatbubble;