import React from 'react'
import Button from '~/common/buttons';
import FormComponent from '~/common/form';
import InputField from '~/common/form/input';
import { IEvent } from '~/utils/constants';
import { browseByState } from '~/utils/constants/browseByState';

const BrowseByState = () => {
  const [selectedState, setSelectedState] = React.useState<any>();
  const handleState = (e: IEvent) => {
    console.log("inside", e.target.value);
    setSelectedState(e.target.value);
  }

  return (
    <div>
      {browseByState.map((input, index) => (
        <InputField
          input={input}
          formValues={{ "addState": selectedState }}
          handleChange={handleState}
          key={index}
        />
      ))}
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