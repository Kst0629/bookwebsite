import mongoose, {ConnectOptions} from 'mongoose'
import db from './default';

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
        } as ConnectOptions);

        console.log('MongoDB is Connected...');
    }catch(err: any){
        console.error(err.message);
        process.exit(1);
    }

};

export default connectDB;