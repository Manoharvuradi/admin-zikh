import React from 'react'
import Button from '~/common/buttons';
import FormComponent from '~/common/form';
import InputField from '~/common/form/input';
import { api } from '~/utils/api';
import { IEvent } from '~/utils/constants';
import { browseByState } from '~/utils/constants/browseByState';

const BrowseByState = () => {
  const [selectedState, setSelectedState] = React.useState<any>();
  const addState = api.searchByState.create.useMutation();
  const handleState = (e: IEvent) => {
    setSelectedState({
      ...selectedState,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: any) =>{
    e.preventDefault();
    await addState.mutateAsync(selectedState).then(() => {
      alert("State added successfully");
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <form onSubmit={handleSubmit} className='w-[50%] mx-auto'>
    <div className=''>
      <FormComponent 
        inputs={browseByState}
        formValues={selectedState}
        handleChange={handleState}
        tailwindClass='grid grid-cols-1 gap-4'
      />
      <Button
        text="Add State"
        type='submit'
        className="mr-3"
        disabled={false}
      />
    </div>
    </form>
  )
}

export default BrowseByState;