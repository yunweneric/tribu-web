// import { Age, DemographicDto } from '@tribu/targets';
// import { demographicFormData } from '../data/demographic_form_data';
// import {
//   AllFormInterfacesType,
//   AppInput,
//   FormFields,
//   AppSelect,
//   AppMultiSelect,
// } from '@tribu/forms';
// interface DemographicProps {
//   data?: DemographicDto;
//   updateDemoGraphics: (data: DemographicDto) => undefined;
// }
// const Demographic = ({ data, updateDemoGraphics }: DemographicProps) => {
//   const generateField = (field: AllFormInterfacesType) => {
//     const value = data
//       ? (data[field['name'] as keyof DemographicDto] as string)
//       : '';

//     switch (field.type) {
//       case FormFields.INPUT:
//         return (
//           <>
//             <p>{field.label}</p>
//             <AppInput
//               {...field}
//               value={value}
//               onChange={(e) => {
//                 updateDemoGraphics({
//                   ...data,
//                   [field.name]: e.target.value,
//                 });
//               }}
//             />
//           </>
//         );

//       case FormFields.RADIO:
//         return (
//           <>
//             <p>{field.label}</p>
//             <AppSelect
//               items={field.elements.map((e) => e.value)}
//               {...field}
//               fullWidth={true}
//               value={value}
//               onChange={(e) => {
//                 updateDemoGraphics({
//                   ...data,
//                   [field.name]: e.target.value,
//                 });
//               }}
//             />
//           </>
//         );

//       case FormFields.CHECKBOX:
//         return (
//           <>
//             <p>{field.label}</p>
//             <AppMultiSelect
//               items={field.elements.map((e) => e.value)}
//               {...field}
//               fullWidth={true}
//               value={[value]}
//               onChange={(e) => {
//                 updateDemoGraphics({
//                   ...data,
//                   [field.name]: e,
//                 });
//               }}
//             />
//           </>
//         );

//       default:
//         break;
//     }
//     return <></>;
//   };
//   return (
//     <div className="w-full">
//       {...demographicFormData.map((field, key) => {
//         return (
//           <div className="mb-3" key={key}>
//             {generateField(field)}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Demographic;
