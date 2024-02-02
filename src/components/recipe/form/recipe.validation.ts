import { i18nKeys } from '@i18n';
import { MeasurementUnit } from '@types';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { setLocale } from 'yup';

export const useRecipeFormValidationSchema = () => {
  const { t } = useTranslation();

  setLocale({
    mixed: {
      required: t(i18nKeys.common.required),
    },
  });

  const ingredientsSchema = Yup.array()
    .min(1, t(i18nKeys.components.recipe.validation.ingredients.min))
    .of(
      Yup.object()
        .shape({
          comment: Yup.string(),
          countEnd: Yup.string(),
          countStart: Yup.string().when(['measureUnit'], {
            is: (value: MeasurementUnit) => value !== MeasurementUnit.AsNeeded,
            then: (schema) => schema.required(),
          }),
          isOptional: Yup.boolean(),
          measureUnit: Yup.mixed<MeasurementUnit>()
            .oneOf(Object.values(MeasurementUnit))
            .required(),
          name: Yup.string().required(),
        })
        .required(),
    )
    .required();

  const stepsSchema = Yup.array()
    .min(1, t(i18nKeys.components.recipe.validation.steps.min))
    .of(
      Yup.object()
        .shape({
          explanation: Yup.string().required(),
          image: Yup.string(),
        })
        .required(),
    )
    .required();

  return Yup.object({
    image: Yup.string(),
    ingredients: ingredientsSchema,
    steps: stepsSchema,
    title: Yup.string().required(),
  });
};
