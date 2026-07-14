import { useState } from "react";

// URL única do webhook do Make. Se precisar trocar no futuro
// (novo cenário, nova conta, etc), troque só aqui.
export const MAKE_WEBHOOK_URL =
  "https://hook.us2.make.com/vvh3rgh92cj7x5uhj60preyy7763nkvj";

interface WebhookSubmitOptions {
  /** Nome da origem do lead, ex: "home", "processos", "mercado", "dados" */
  origem?: string;
  /** Para onde navegar depois do envio (ex: "/obrigado") */
  onSuccessPath?: string;
}

/**
 * Hook centralizado para enviar dados de formulário para o webhook do Make.
 * Usado por todos os formulários da landing page (Home + páginas de serviço),
 * para garantir que uma futura reconstrução no Lovable não perca a integração
 * em apenas um dos formulários.
 */
export function useWebhookSubmit(options: WebhookSubmitOptions = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: Record<string, unknown>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          origem: options.origem ?? window.location.pathname,
          enviado_em: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook respondeu com status ${response.status}`);
      }

      return { success: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro desconhecido";
      console.error("Erro ao enviar para o webhook do Make:", message);
      setError(message);
      // Não relançamos o erro: mesmo se o webhook falhar, o fluxo do usuário
      // (navegar para /obrigado) não deve travar. O erro fica no console
      // e em `error` para quem quiser tratar de forma diferente.
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}
