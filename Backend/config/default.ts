interface db {
    mongoURI: string;
}

const config: db = {
    mongoURI: "mongodb+srv://Vincent:@cluster0.go4aejl.mongodb.net/?retryWrites=true&w=majority"
}

function connectToMongoDB(uri:string){
    console.log('Connecting to MongoDB');
}

const mongoURI = config.mongoURI;
connectToMongoDB(mongoURI);

export default mongoURI;