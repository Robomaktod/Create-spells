import { useState } from "react";
import { SelectInput, TextInput } from "./components";
import { levelOptions, schoolOptions, durationUnits, actionsOptions } from "./constants";
import { Spell } from "./interfaces";
import CheckboxInput from "./components/CheckboxInput";


const App = () => {
  const [spell, setSpell] = useState<Spell>({
    name: '',
    level: 'Cantrip',
    school: 'Abjuration',
    castingTime: '',
    castingTimeAction: 'Action',
    castingTimeDescription: '',
    duration: '',
    durationUnit: 'Round',
    concentration: 'No',
    components: {
      verbal: false,
      somatic: false,
      material: false,
    },
    materialDescription: '',
    ritual: 'No',
    description: '',
    highLevel: '',
    classes: '',
    book: '',
  });
  
  const handleChange = (name: string, value: string | boolean) => {
    if (typeof value === 'boolean') {
      setSpell((prev) => ({
        ...prev,
        components: {
          ...prev.components,
          [name]: value,
        },
      }));
    } else {
      setSpell((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  return (
    <div className="flex h-screen w-full bg-indigo-900 p-44">
      <div>
        <h1>Create spell</h1> 

        <label>Name</label>
        <TextInput
          name="name"
          value={spell.name}
          placeholder="as"
          onChange={handleChange}
        />

        <label>Level</label>
        <SelectInput 
          name="level" 
          value={spell.level} 
          onChange={handleChange} 
          options={levelOptions} 
        />

        <label>School</label>
        <SelectInput
          name="school"
          value={spell.school}
          onChange={handleChange}
          options={schoolOptions}
        />

        <label>Casting Time</label>
        <div className="flex flex-row">
          <TextInput
            name="castingTime"
            value={spell.castingTime} 
            onChange={handleChange} 
          />
          <SelectInput
            name="castingTimeAction"
            value={spell.castingTimeAction}
            onChange={handleChange}
            options={actionsOptions}
          />
        </div>

        <label>Duration</label>
        <div className="flex">
          <TextInput
            className="self-end"
            name="duration"
            value={spell.duration} 
            onChange={handleChange} 
          />
          <SelectInput
            className="self-end"
            name="durationUnit"
            value={spell.durationUnit}
            onChange={handleChange}
            options={durationUnits}
          />
          <div>
            <p className="relative -top-5">Concentration</p>
            <SelectInput
              name="concentration"
              value={spell.concentration}
              onChange={handleChange}
              options={[
                { value: 'No', label: 'No'},
                { value: 'Yes', label: 'Yes'}
              ]}
            />
          </div>
        </div>
        <label>Components</label>
        <div className="flex flex-row">
        <TextInput
            className="self-end"
            name="duration"
            value={spell.duration} 
            onChange={handleChange} 
          />
          <SelectInput
            className="self-end"
            name="durationUnit"
            value={spell.durationUnit}
            onChange={handleChange}
            options={durationUnits}
          />
          <div>
            <p>Concentration</p>
            <SelectInput
              name="concentration"
              value={spell.concentration}
              onChange={handleChange}
              options={[
                { value: 'No', label: 'No'},
                { value: 'Yes', label: 'Yes'}
              ]}
            />
          </div>
          </div>
       
      </div>
      <div>
        <h2>Description</h2>
        <h2>At higher level</h2>
        <h2>Classes</h2>
      </div>
  
    </div>
  );
};

export default App;
