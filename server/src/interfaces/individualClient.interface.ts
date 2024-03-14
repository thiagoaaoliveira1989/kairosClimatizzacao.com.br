import { z } from "zod";
import { createIndividualClientSchema, individualClientSchema, returnIndividualClientSchema, updateIndividualClientSchema } from "../schemas/individualClient.schema";

export type IReturnIndividualClient = z.infer<typeof returnIndividualClientSchema>;


export type ICreateIndividualClient = z.infer<typeof createIndividualClientSchema>;


export type IUpdateIndividualClient = z.infer<typeof updateIndividualClientSchema>;