import React from 'react'
import Button from '~/common/buttons'

const SearchByCity = () => {
    const handleCreateCity = () => {

    }
    return (
        <div>

            <Button
                text="Add city"
                onClick={() => {
                    handleCreateCity()
                }}
                className="mr-3"
                disabled={false}
            />
        </div>
    )
}

export default SearchByCity;