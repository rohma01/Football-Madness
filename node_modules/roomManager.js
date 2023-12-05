class RoomManager {
    constructor(minRoomCapacity) {
        this.minRoomCapacity = minRoomCapacity;
        this.usersWithRoom = {};  // Object to store users with a room (user_id: room_id)
        this.rooms = {};  // Object to store rooms (room_id: Set([user_id1, user_id2, ...]))
    }

    addUser(userId) {
        this.usersWithRoom[userId] = null;  // User initially not in any room
    }

    getRoom(userId) {
        if (userId in this.usersWithRoom) {
            const roomId = this.usersWithRoom[userId];

            if (roomId !== null) {
                // User is already in a room, return the room and roomId
                return {'room':Array.from(this.rooms[roomId]), 'roomId':roomId};
            } else {
                // Check if there are enough users to create a new room
                const availableUsers = new Set(Object.keys(this.usersWithRoom).filter(u => this.usersWithRoom[u] === null));
                if (availableUsers.size >= this.minRoomCapacity) {
                    const newRoomId = Object.keys(this.rooms).length + 1;  // Generate a new room ID
                    const roomUsers = new Set(Array.from(availableUsers).slice(0, this.minRoomCapacity));
                    this.rooms[newRoomId] = roomUsers;

                    // Update usersWithRoom with the room ID
                    for (const u of roomUsers) {
                        this.usersWithRoom[u] = newRoomId;
                    }
                    return {'room':Array.from(roomUsers), 'roomId':newRoomId};
                } else {
                    return {'room':this.insufficientUsers(), 'roomId':null};
                }
            }
        } else {
            console.log(`User ${userId} is not in the list of users with or without a room.`);
            return {'room':this.insufficientUsers(), 'roomId':null};
        }
    }

    removeUser(userId) {
        if (userId in this.usersWithRoom) {
            const roomId = this.usersWithRoom[userId];

            if (roomId !== null) {
                const roomUsers = Array.from(this.rooms[roomId]);
                delete this.rooms[roomId];
                for (const u of roomUsers) {
                    if (u !== userId) {
                        this.usersWithRoom[u] = null;
                    }
                }
            }
        } else {
            console.log(`User ${userId} is not in the list of users with or without a room.`);
        }
    }

    insufficientUsers() {
        console.log("Insufficient users to create a room.");
        return [];
    }
}

module.exports = RoomManager;
