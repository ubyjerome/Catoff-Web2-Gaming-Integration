// import userModel from "../modules/user/user.model";

// export const databaseMigration = async () => {
//     console.log("Database Migration Triggered...");

//     try {
        
//         const result = await userModel.updateMany(
//             {},
//             { $set: { hasPassword: false } }
//         );

//         console.log(`Matched ${result.matchedCount} documents and modified ${result.modifiedCount} documents.`);
//     } catch (error) {
//         console.error('Error during database migration:', error);
//     }
// };