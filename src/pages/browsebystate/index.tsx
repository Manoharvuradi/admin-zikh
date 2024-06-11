import React from 'react'
import Button from '~/common/buttons';
import InputField from '~/common/form/input';
import { browseByState } from '~/utils/constants/browseByState';

const BrowseByState = () => {
  const [selectedState, setSelectedState] = React.useState(browseByState);
  const handleState = () => {
    setSelectedState(browseByState);
  }
  return (
    <div>
      <InputField 
        input={browseByState}
        formValues={selectedState}
        handleChange={handleState}
      />
      <Button
        text="Add State"
        onClick={() => {}}
        className="mr-3"
        disabled={false}
      />
    </div>
  )
}

export default BrowseByState;