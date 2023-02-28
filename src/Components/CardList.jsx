import React from 'react';
import UserCard from './UserCard';

const CardList = (props) => {
    const { myUsers } = props;
    
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-8 lg:gap-6 md:gap-20 xs:gap-20 md:mt-10 xs:mt-12'>
            {
                myUsers.map((user) => {
                    return (
                        <div key={user.id} className=''>
                            <UserCard myUsers={user} />
                        </div>
                    )
                })
            }

        </div>
    )
}


export default CardList;