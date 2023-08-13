interface db {
    mongoURI: string;
}

const config: db = {
    mongoURI: "mongodb+srv://Vincent:Vgyjm0629@cluster0.go4aejl.mongodb.net/?retryWrites=true&w=majority"
}

function connectToMongoDB(uri:string){
    console.log('Connecting to MongoDB');
}

const mongoURI = config.mongoURI;
connectToMongoDB(mongoURI);

export default mongoURI;